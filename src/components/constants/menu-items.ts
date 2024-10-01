
export const menuItems = [
    {
        title: "Productos",
        hasIcon: false,
        href: "/productos",
        listItems: [
            {
                title: 'Productos destacados',
                href: '/productos',
                description: 'Explore nuestros productos, acceda a consulta, destacado y mas.',
            },
            {
                title: 'Catalogo',
                href: '/documents/catalogo-productos-consuegra.pdf',
                description: 'Descargue nuestro catalogo de productos.',
                blank: true,
            },
        ],
        categories: [
            {
                title: 'Categorias',
                listItems: [
                    {
                        title: 'Categorias',
                        href: '/productos',
                        description: 'Explore nuestros productos, acceda a consulta, destacado y mas.',
                    },
                    {
                        title: 'Catalogo',
                        href: '/documents/catalogo-productos-consuegra.pdf',
                        description: 'Descargue nuestro catalogo de productos.',
                        blank: true,
                    },
                ],
            },
        ],
        blank: false,
    },
    {
        title: "Nosotros",
        hasIcon: false,
        href: "/nosotros",
    },
    {
        title: "menu-logo",
        icon: "/LogoMono.png",
        hasIcon: false,
        href: "/",
    },
    {
        title: "Empleos",
        hasIcon: false,
        href: "/empleo",
    },
    {
        title: "Contacto",
        hasIcon: false,
        href: "/contacto",
    },
]





