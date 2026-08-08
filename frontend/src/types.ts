export type TicketPriority = "high" | "medium" | "low";

export type MessageAuthor = "customer" | "agent";

export type ConversationMessage = {
  id: string;
  author: MessageAuthor;
  senderName: string;
  sentAt: string;
  content: string;
};

export type KnowledgeCitation = {
  id: string;
  title: string;
  section: string;
};

export type AiSuggestion = {
  summary: string;
  confidence: number;
  reply: string;
  citations: KnowledgeCitation[];
};

export type Ticket = {
  id: string;
  customerName: string;
  companyName: string;
  subject: string;
  status: string;
  priority: TicketPriority;
  channel: string;
  updatedAt: string;
  tags: string[];
  messages: ConversationMessage[];
  aiSuggestion: AiSuggestion;
};
