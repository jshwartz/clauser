export default [
  {id: 1,
    orderNumber: 1,
    type: 'dropdown',
    title: 'Which party to be shielded?',
    helpText: 'Select which party or parties the damages exlcusion and liability cap should protect',
    clauseId: 1
  },
  {id: 2,
    orderNumber: 2,
    type: 'dropdown',
    title: 'Which catagories of damages to exclude?',
    helpText: 'See documentation for the consequences of catagorically excluding damages. Note that liability caps will be more reliable than this',
    clauseId: 1
  },
  {id: 3,
    orderNumber: 3,
    type: 'static',
    staticText: ', WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE, PRODUCT LIABILITY OR OTHERWISE), OR ANY OTHER PECUNIARY LOSS.',
    clauseId: 1
  },
  {id: 4,
    orderNumber: 4,
    type: 'dropdown',
    title: 'Choose damage cap.',
    helpText: 'See documentation for discussion on damage caps',
    clauseId: 1
  },
];
