const data = {
  code: 2000,
  msg: "OK",
  status: true,
  response: [
    {
      id: 1,
      code: 10000,
      label: "合同管理",
      status: true,
      url: "",
      actionType: [],
      children: [
        {
          id: 4,
          code: 10001,
          label: "物流合同",
          status: true,
          actionType: ["add", "edit", "del", "info"],
          url: "/path/func"
        },
        {
          id: 5,
          code: 10002,
          label: "门店分配",
          status: true,
          actionType: ["add", "edit", "del", "info"],
          url: "/path/func"
        },
        {
          id: 6,
          code: 10003,
          label: "门店合同",
          status: false,
          actionType: ["add", "edit", "del", "info"],
          url: "/path/func"
        }
      ]
    },
    {
      id: 7,
      code: 10004,
      label: "财务管理",
      status: true,
      actionType: [],
      url: "",
      children: [
        {
          id: 8,
          code: 10005,
          label: "代金券管理",
          status: true,
          url: "",
          actionType: [],
          children: [
            {
              id: 9,
              code: 1000,
              label: "代金券审核",
              status: true,
              actionType: ["add", "edit", "del", "info"],
              url: "/path/func"
            }
          ]
        },
        {
          id: 10,
          code: 10006,
          label: "账单管理",
          status: true,
          actionType: [],
          url: "",
          children: [
            {
              id: 11,
              code: 10007,
              label: "物流账单",
              status: true,
              actionType: ["add", "edit", "del", "info"],
              url: "/path/func"
            },
            {
              id: 12,
              code: 10008,
              label: "门店账单",
              status: true,
              actionType: ["add", "edit", "del", "info"],
              url: "/path/func"
            },
            {
              id: 13,
              code: 10009,
              label: "平台账单",
              status: true,
              actionType: ["add", "edit", "del", "info"],
              url: "/path/func"
            }
          ]
        }
      ]
    }
  ]
};
const groupIndexData = [
  {
    id: 1,
    name: "客户",
    type: "普通管理员",
    status: true
  },
  {
    id: 2,
    name: "普通管理员",
    type: "普通管理员",
    status: false
  },
  {
    id: 3,
    name: "超级管理员",
    type: "超级管理员",
    status: true
  }
];
export default {
  index: () => {
    return data;
  },
  groupIndex: () => {
    return groupIndexData;
  }
};
