import { PropertySetting } from './property-setting.model';

export interface Property {
    id: number,
    name: string,
    settings: PropertySetting[]
}