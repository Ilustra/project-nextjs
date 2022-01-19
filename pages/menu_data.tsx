export const menu =   [
    {
      type: 'link',
      label: 'Home',
      icon: 'home', 
      route: '/Home'
    },
    {
      type: 'link',
      label: 'Botões',

      route: '/Button'
    },
    {
    type: 'dropdown',
    label: 'Cadastros',
    icon: 'person',
    expaned: true,
    children: [
          {
            type: 'link',
            label: 'Botões',
            route: '/Button'
          },

    ],
  },


  ];