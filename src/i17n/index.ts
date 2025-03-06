import { heb } from './heb';

export function i18n(key: keyof typeof heb) {
    return heb[key];
}

export function curr(parts: TemplateStringsArray) {
    const amount = parts[0].split('');
    if (amount.length < 4) {
        return amount.join('');
    }
    for (let i = amount.length - 3; i > 0; i -= 3) {
        amount.splice(i, 0, ',');
    }

    return amount.join('') + i18n('currency');
}