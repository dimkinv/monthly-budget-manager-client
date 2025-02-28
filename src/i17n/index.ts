import { heb } from './heb';

export function getText(key: keyof typeof heb) {
    return heb[key];
}