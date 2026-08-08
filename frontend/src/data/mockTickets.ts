import type { Ticket } from "../types";

export const mockTickets: Ticket[] = [
  {
    id: "TK-1024",
    customerName: "林晓雨",
    companyName: "星河零售",
    subject: "会员积分无法同步到小程序",
    status: "待回复",
    priority: "high",
    channel: "在线客服",
    updatedAt: "10:24",
    tags: ["积分", "小程序", "P1"],
    messages: [
      {
        id: "m-1",
        author: "customer",
        senderName: "林晓雨",
        sentAt: "10:12",
        content: "我们今天早上做了会员活动，用户在门店消费后，小程序里一直看不到新增积分。"
      },
      {
        id: "m-2",
        author: "agent",
        senderName: "客服 Amanda",
        sentAt: "10:15",
        content: "收到，我先确认一下：门店 POS 侧订单已经完成支付，并且会员手机号能正确匹配吗？"
      },
      {
        id: "m-3",
        author: "customer",
        senderName: "林晓雨",
        sentAt: "10:18",
        content: "订单状态正常，手机号也匹配。我们怀疑是不是积分同步任务延迟了。"
      }
    ],
    aiSuggestion: {
      summary: "客户反馈门店消费积分未同步到小程序，订单和会员手机号均已确认正常。",
      confidence: 92,
      reply:
        "您好，已根据您提供的信息初步判断为积分同步任务延迟。请您先在管理后台进入「会员中心 > 积分流水」确认该订单是否已生成积分记录；如果流水存在但小程序未展示，通常会在 5-10 分钟内自动同步。若超过 10 分钟仍未更新，请提供订单号和会员手机号，我们会帮您触发补偿同步。",
      citations: [
        {
          id: "doc-1",
          title: "会员积分同步说明",
          section: "第 2.3 节：POS 到小程序同步延迟"
        },
        {
          id: "doc-2",
          title: "积分异常处理 SOP",
          section: "第 4 节：补偿同步流程"
        }
      ]
    }
  },
  {
    id: "TK-1023",
    customerName: "陈嘉宁",
    companyName: "北辰 SaaS",
    subject: "无法导出上月对账单",
    status: "处理中",
    priority: "medium",
    channel: "邮件",
    updatedAt: "09:48",
    tags: ["账单", "导出"],
    messages: [
      {
        id: "m-4",
        author: "customer",
        senderName: "陈嘉宁",
        sentAt: "09:31",
        content: "后台导出 7 月对账单一直显示处理中，等了十几分钟还是没有下载链接。"
      },
      {
        id: "m-5",
        author: "agent",
        senderName: "客服 Ben",
        sentAt: "09:37",
        content: "我帮您看一下导出任务。请问您选择的是全部门店还是单个门店？"
      },
      {
        id: "m-6",
        author: "customer",
        senderName: "陈嘉宁",
        sentAt: "09:43",
        content: "选择的是全部门店，大概 280 家。"
      }
    ],
    aiSuggestion: {
      summary: "客户导出全部门店月度对账单耗时过长，涉及 280 家门店数据。",
      confidence: 86,
      reply:
        "您好，全部门店的月度对账单数据量较大，导出任务可能需要更长时间。建议您先按区域或门店分批导出，以降低单次任务数据量。同时我会协助查询当前导出任务状态，如果任务超过 30 分钟仍未完成，可以为您重新生成导出任务。",
      citations: [
        {
          id: "doc-3",
          title: "财务报表导出指南",
          section: "第 1.5 节：大批量导出建议"
        }
      ]
    }
  },
  {
    id: "TK-1022",
    customerName: "赵明",
    companyName: "云岭教育",
    subject: "知识库搜索结果不准确",
    status: "待确认",
    priority: "low",
    channel: "企业微信",
    updatedAt: "昨天",
    tags: ["知识库", "搜索"],
    messages: [
      {
        id: "m-7",
        author: "customer",
        senderName: "赵明",
        sentAt: "昨天 16:02",
        content: "我们上传了新版招生政策，但客服搜索时还是经常搜到旧政策。"
      },
      {
        id: "m-8",
        author: "agent",
        senderName: "客服 Claire",
        sentAt: "昨天 16:16",
        content: "请问旧政策文档是否已经从知识库下架，还是仍保留为历史资料？"
      },
      {
        id: "m-9",
        author: "customer",
        senderName: "赵明",
        sentAt: "昨天 16:24",
        content: "目前还保留着，但希望搜索时新版优先。"
      }
    ],
    aiSuggestion: {
      summary: "客户希望新版招生政策在知识库搜索中优先展示，旧文档仍需保留。",
      confidence: 78,
      reply:
        "您好，可以保留旧政策文档，同时将新版文档设置为「当前有效」并提高权重。建议在旧文档标题或摘要中标注「历史版本」，并在新版文档中补充生效日期。调整后搜索结果会优先匹配当前有效版本。",
      citations: [
        {
          id: "doc-4",
          title: "知识库文档管理规范",
          section: "第 3.1 节：版本状态与权重"
        },
        {
          id: "doc-5",
          title: "搜索排序配置说明",
          section: "第 2 节：有效期优先规则"
        }
      ]
    }
  },
  {
    id: "TK-1025",
    customerName: "李华",
    companyName: "云岭教育",
    subject: "知识库搜索结果不准确",
    status: "待确认",
    priority: "high",
    channel: "企业微信",
    updatedAt: "昨天",
    tags: ["知识库", "搜索"],
    messages: [
      {
        id: "m-7",
        author: "customer",
        senderName: "赵明",
        sentAt: "昨天 16:02",
        content: "我们上传了新版招生政策，但客服搜索时还是经常搜到旧政策。"
      },
      {
        id: "m-8",
        author: "agent",
        senderName: "客服 Claire",
        sentAt: "昨天 16:16",
        content: "请问旧政策文档是否已经从知识库下架，还是仍保留为历史资料？"
      },
      {
        id: "m-9",
        author: "customer",
        senderName: "赵明",
        sentAt: "昨天 16:24",
        content: "目前还保留着，但希望搜索时新版优先。"
      }
    ],
    aiSuggestion: {
      summary: "客户希望新版招生政策在知识库搜索中优先展示，旧文档仍需保留。",
      confidence: 78,
      reply:
        "您好，可以保留旧政策文档，同时将新版文档设置为「当前有效」并提高权重。建议在旧文档标题或摘要中标注「历史版本」，并在新版文档中补充生效日期。调整后搜索结果会优先匹配当前有效版本。",
      citations: [
        {
          id: "doc-4",
          title: "知识库文档管理规范",
          section: "第 3.1 节：版本状态与权重"
        },
        {
          id: "doc-5",
          title: "搜索排序配置说明",
          section: "第 2 节：有效期优先规则"
        }
      ]
    }
  }
];
