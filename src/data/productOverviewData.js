import hydraulik from '../images/products/hydraulik.jpg';
import pneumatik from '../images/products/pneumatik.jpg';
import automatisierung from '../images/products/automatisierung.jpg';
import motoren from '../images/products/motoren.jpg';
import pumpen from '../images/products/pumpen.jpg';
import airtecLogo from '../images/logos/airtec-logo.jpg';
import dyniscoLogo from '../images/logos/dynisco-logo.jpg';
import endressHauserLogo from '../images/logos/endress-hauser-logo.jpg';
import haweHydraulicLogo from '../images/logos/hawe-hydraulic-logo.jpg';
import gefaLogo from '../images/logos/gefa-logo.jpg';
import schneiderElectricLogo from '../images/logos/schneider-electric-logo.jpg';
import weberHydraulicsLogo from '../images/logos/weber-hydraulics-logo.jpg';
import parkerLogo from '../images/logos/parker-logo.jpg';
import festoLogo from '../images/logos/festo-logo.jpg';
import skfLogo from '../images/logos/skf-logo.jpg';
import steimelLogo from '../images/logos/steimel-logo.jpg';
import witteLogo from '../images/logos/witte-logo.jpg';

const productData = [
    {
        "title": "Hydraulikprodukte",
        "images": {
            "src": hydraulik,
            "alt": "Hydraulikprodukte",
            "title": "Hydraulikprodukte",
        },
        "brands": {
            "title": "Marken",
            "images": [
                {
                    "src": haweHydraulicLogo,
                    "alt": "Hawe Hydraulik",
                    "title": "Hawe Hydraulik"
                },
                {
                    "src": weberHydraulicsLogo,
                    "alt": "Weber Hydraulik",
                    "title": "Weber Hydraulik"
                },
                {
                    "src": parkerLogo,
                    "alt": "Parker",
                    "title": "Parker"
                }
            ]
        }
    },
    {
        "title": "Pneumatikprodukte",
        "images": {
            "src": pneumatik,
            "alt": "Pneumatikprodukte",
            "title": "Pneumatikprodukte",
        },
        "brands": {
            "title": "Marken",
            "images": [
                {
                    "src": airtecLogo,
                    "alt": "Airtec",
                    "title": "Airtec"
                },
                {
                    "src": gefaLogo,
                    "alt": "Gefa",
                    "title": "Gefa"
                },
                {
                    "src": festoLogo,
                    "alt": "Festo",
                    "title": "Festo"
                }
            ]
        }
    },
    {
        "title": "Automatisierungsprodukte",
        "images": {
            "src": automatisierung,
            "alt": "Automatisierungsprodukte",
            "title": "Automatisierungsprodukte",
        },
        "brands": {
            "title": "Marken",
            "images": [
                {
                    "src": endressHauserLogo,
                    "alt": "Endress Hauser",
                    "title": "Endress Hauser"
                },
                {
                    "src": schneiderElectricLogo,
                    "alt": "Schneider Electric",
                    "title": "Schneider Electric"
                },
                {
                    "src": dyniscoLogo,
                    "alt": "Dynsico",
                    "title": "Dynsico"
                }
            ]
        }
    },
    {
        "title": "Motoren & Pumpen",
        "images": [
            {
                "src": motoren,
                "alt": "Motoren",
                "title": "Motoren",
            },
            {
                "src": pumpen,
                "alt": "Pumpen",
                "title": "Pumpen",
            },
        ],
        "brands": {
            "title": "Marken",
            "images": [
                {
                    "src": skfLogo,
                    "alt": "SKF",
                    "title": "SKF"
                },
                {
                    "src": steimelLogo,
                    "alt": "Steimel",
                    "title": "Steimel"
                },
                {
                    "src": witteLogo,
                    "alt": "Witte Pumps & Technology",
                    "title": "Witte Pumps & Technology"
                }
            ]
        }
    }
]

export default productData;