export interface Country {
    name: string;
    code: string; // ISO 2-letter code
    dialCode: string;
    flag: string;
    phoneLength: number; // exact length or max length
}

export const countries: Country[] = [
    { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳', phoneLength: 10 },
    { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸', phoneLength: 10 },
    { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧', phoneLength: 10 },
    { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦', phoneLength: 10 },
    { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺', phoneLength: 9 },
    { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪', phoneLength: 10 }, // Can vary 10-11
    { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', phoneLength: 9 },
    { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵', phoneLength: 10 },
    { name: 'China', code: 'CN', dialCode: '+86', flag: '🇨🇳', phoneLength: 11 },
    { name: 'Russia', code: 'RU', dialCode: '+7', flag: '🇷🇺', phoneLength: 10 },
    { name: 'Brazil', code: 'BR', dialCode: '+55', flag: '🇧🇷', phoneLength: 11 },
    { name: 'South Africa', code: 'ZA', dialCode: '+27', flag: '🇿🇦', phoneLength: 9 },
    { name: 'UAE', code: 'AE', dialCode: '+971', flag: '🇦🇪', phoneLength: 9 },
    { name: 'Saudi Arabia', code: 'SA', dialCode: '+966', flag: '🇸🇦', phoneLength: 9 },
    // Add more as needed
];

export const defaultCountry = countries.find(c => c.code === 'IN') || countries[0];
