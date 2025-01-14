import WeakMap from '../../shim/WeakMap';
import { WidgetBase } from './../WidgetBase';
import { handleDecorator } from './handleDecorator';
import { beforeProperties } from './beforeProperties';
import { InjectorItem, RegistryLabel } from './../interfaces';

/**
 * Map of instances against registered injectors.
 */
const registeredInjectorsMap: WeakMap<WidgetBase, InjectorItem[]> = new WeakMap();

/**
 * Defines the contract requires for the get properties function
 * used to map the injected properties.
 */
export interface GetProperties<T = any> {
	(payload: any, properties: T): T;
}

/**
 * Defines the inject configuration required for use of the `inject` decorator
 */
export interface InjectConfig {
	/**
	 * The label of the registry injector
	 */
	name: RegistryLabel;

	/**
	 * Function that returns propertues to inject using the passed properties
	 * and the injected payload.
	 */
	getProperties: GetProperties;
}

export function getInjector(instance: WidgetBase & { own: Function }, name: RegistryLabel) {
	const injectorItem = instance.registry.getInjector(name);
	if (injectorItem) {
		const { injector, invalidator } = injectorItem;
		const registeredInjectors = registeredInjectorsMap.get(instance) || [];
		if (registeredInjectors.length === 0) {
			registeredInjectorsMap.set(instance, registeredInjectors);
		}
		if (registeredInjectors.indexOf(injectorItem) === -1) {
			instance.own(
				invalidator.on('invalidate', () => {
					instance.invalidate();
				})
			);
			registeredInjectors.push(injectorItem);
		}
		return injector;
	}
}

/**
 * Decorator retrieves an injector from an available registry using the name and
 * calls the `getProperties` function with the payload from the injector
 * and current properties with the the injected properties returned.
 *
 * @param InjectConfig the inject configuration
 */
export function inject({ name, getProperties }: InjectConfig) {
	return handleDecorator((target) => {
		beforeProperties(function(this: WidgetBase & { own: Function }, properties: any) {
			const injector = getInjector(this, name);
			if (injector) {
				return getProperties(injector(), properties);
			}
		})(target);
	});
}

export default inject;
