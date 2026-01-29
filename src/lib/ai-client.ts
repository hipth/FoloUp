import { OpenAI } from "openai";

/**
 * 创建统一的 AI 客户端
 * 支持 DeepSeek 和 OpenAI，通过环境变量自动选择
 */
export function createAIClient() {
  const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
  const openaiApiKey = process.env.OPENAI_API_KEY;

  // 优先使用 DeepSeek，如果未配置则使用 OpenAI
  if (deepseekApiKey) {
    return new OpenAI({
      apiKey: deepseekApiKey,
      baseURL: "https://api.deepseek.com",
      maxRetries: 5,
      dangerouslyAllowBrowser: true,
    });
  }

  if (!openaiApiKey) {
    throw new Error(
      "Neither DEEPSEEK_API_KEY nor OPENAI_API_KEY is set. Please configure at least one API key.",
    );
  }

  return new OpenAI({
    apiKey: openaiApiKey,
    maxRetries: 5,
    dangerouslyAllowBrowser: true,
  });
}

/**
 * 获取当前使用的 AI 模型名称
 */
export function getAIModel(): string {
  if (process.env.DEEPSEEK_API_KEY) {
    // DeepSeek 模型选项：
    // - deepseek-chat: 标准对话模型
    // - deepseek-reasoner: 推理模型（适合复杂分析）
    return process.env.DEEPSEEK_MODEL || "deepseek-chat";
  }
  return "gpt-4o";
}

/**
 * 获取当前使用的 AI 服务名称（用于日志）
 */
export function getAIServiceName(): string {
  return process.env.DEEPSEEK_API_KEY ? "DeepSeek" : "OpenAI";
}
