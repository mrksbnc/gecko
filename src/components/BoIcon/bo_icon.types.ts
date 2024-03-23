import type { Icon } from '@/components/BoIcon';
import type { BoSize } from '@/constants';
import type { Ref, StyleValue } from 'vue';

export declare type UseBoIconComposableArgs = {
	icon: Ref<Icon>;
	size: Ref<BoSize>;
	color: Ref<string>;
};

export declare type UseBoIconComposableReturn = {
	classes: string;
	style: StyleValue;
	iconMap: Record<string, () => Promise<string>>;
	getIconSvg: (icon: Icon) => Promise<string>;
};