export default [
  {id: 1,
    orderNumber: 1,
    menuText: 'Party 1 Only',
    text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, PARTY 1 WILL NOT BE RESPONSIBLE OR HELD LIABLE FOR',
    defaultTrue: true,
    clauseBlockId: 1
  },
  {id: 2,
    orderNumber: 2,
    menuText: 'Party 2 Only',
    text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, PARTY 2 WILL NOT BE RESPONSIBLE OR HELD LIABLE FOR',
    defaultTrue: false,
    clauseBlockId: 1
  },
  {id: 3,
    orderNumber: 3,
    menuText: 'Both Parties',
    text: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE RESPONSIBLE OR HELD LIABLE FOR',
    defaultTrue: false,
    clauseBlockId: 1
  },
  {id: 4,
    orderNumber: 1,
    menuText: 'Capped at contract price',
    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN ANY ACTION FOR DAMAGES ARISING UNDER THIS AGREEMENT, EACH PARTY'S MONETARY DAMAGES WILL BE LIMITED TO THE TOTAL MONETARY AMOUNT RECIEVED UNDER THIS AGREEMENT.",
    defaultTrue: false,
    clauseBlockId: 4
  },
  {id: 5,
    orderNumber: 2,
    menuText: 'Capped at fixed dollar amount',
    text: "TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN ANY ACTION FOR DAMAGES ARISING UNDER THIS AGREEMENT, EACH PARTY'S MONETARY DAMAGES WILL BE LIMITED TO $_____________.",
    defaultTrue: true,
    clauseBlockId: 4
  },
];
