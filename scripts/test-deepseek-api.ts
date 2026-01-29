/**
 * DeepSeek API 测试脚本
 * 用于验证 DeepSeek API 是否正常工作
 * 
 * 运行方式：
 * 1. 确保 .env 文件中设置了 DEEPSEEK_API_KEY
 * 2. 运行: npx tsx scripts/test-deepseek-api.ts
 */

import { config } from "dotenv";
import { createAIClient, getAIModel, getAIServiceName } from "../src/lib/ai-client";

// 加载环境变量
config();

async function testDeepSeekAPI() {
  console.log("=".repeat(60));
  console.log("DeepSeek API 测试开始");
  console.log("=".repeat(60));
  console.log();

  // 检查环境变量
  if (!process.env.DEEPSEEK_API_KEY) {
    console.error("❌ 错误: 未找到 DEEPSEEK_API_KEY 环境变量");
    console.log("请在 .env 文件中设置 DEEPSEEK_API_KEY");
    process.exit(1);
  }

  console.log(`✅ 检测到 DEEPSEEK_API_KEY`);
  console.log(`📦 使用服务: ${getAIServiceName()}`);
  console.log(`🤖 使用模型: ${getAIModel()}`);
  console.log();

  const client = createAIClient();

  // 测试 1: 基础对话测试
  console.log("测试 1: 基础对话测试");
  console.log("-".repeat(60));
  try {
    const response1 = await client.chat.completions.create({
      model: getAIModel(),
      messages: [
        {
          role: "user",
          content: "请用一句话介绍你自己",
        },
      ],
      max_tokens: 100,
    });

    const content1 = response1.choices[0]?.message?.content;
    console.log(`✅ 成功: ${content1}`);
    console.log();
  } catch (error: any) {
    console.error(`❌ 失败: ${error.message}`);
    console.error(error);
    process.exit(1);
  }

  // 测试 2: JSON 格式输出测试（用于问题生成）
  console.log("测试 2: JSON 格式输出测试（模拟面试问题生成）");
  console.log("-".repeat(60));
  try {
    const response2 = await client.chat.completions.create({
      model: getAIModel(),
      messages: [
        {
          role: "system",
          content: "你是一个专业的面试官，擅长设计面试问题。",
        },
        {
          role: "user",
          content:
            "请为前端开发工程师职位生成2个面试问题，以JSON格式输出，包含questions数组和description字段。",
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 500,
    });

    const content2 = response2.choices[0]?.message?.content;
    const parsed = JSON.parse(content2 || "{}");
    console.log(`✅ 成功: 生成了 ${parsed.questions?.length || 0} 个问题`);
    console.log(`📝 描述: ${parsed.description || "N/A"}`);
    if (parsed.questions) {
      parsed.questions.forEach((q: any, i: number) => {
        console.log(`   ${i + 1}. ${q.question || JSON.stringify(q)}`);
      });
    }
    console.log();
  } catch (error: any) {
    console.error(`❌ 失败: ${error.message}`);
    console.error(error);
    process.exit(1);
  }

  // 测试 3: 分析任务测试（模拟回答分析）
  console.log("测试 3: 分析任务测试（模拟面试回答分析）");
  console.log("-".repeat(60));
  try {
    const response3 = await client.chat.completions.create({
      model: getAIModel(),
      messages: [
        {
          role: "system",
          content: "你是一个专业的面试分析专家，擅长评估候选人的回答。",
        },
        {
          role: "user",
          content: `请分析以下面试回答，给出0-100的评分和简短反馈（JSON格式）：
          
问题：请介绍一下你的项目经验
回答：我在上一家公司负责开发了一个电商平台，使用了React和Node.js技术栈。

请以JSON格式输出，包含score（0-100）和feedback（60字以内）字段。`,
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 200,
    });

    const content3 = response3.choices[0]?.message?.content;
    const parsed3 = JSON.parse(content3 || "{}");
    console.log(`✅ 成功: 评分 ${parsed3.score || "N/A"}`);
    console.log(`📝 反馈: ${parsed3.feedback || "N/A"}`);
    console.log();
  } catch (error: any) {
    console.error(`❌ 失败: ${error.message}`);
    console.error(error);
    process.exit(1);
  }

  // 测试 4: 长文本处理测试（模拟转录分析）
  console.log("测试 4: 长文本处理测试（模拟面试转录分析）");
  console.log("-".repeat(60));
  try {
    const longTranscript = `
面试官：请介绍一下你自己。
候选人：我是张三，有5年前端开发经验，擅长React和Vue框架。
面试官：能详细说说你最近的项目吗？
候选人：最近做了一个电商平台，主要负责前端开发，使用了React Hooks和Redux进行状态管理。
面试官：遇到的最大挑战是什么？
候选人：主要是性能优化，通过代码分割和懒加载提升了页面加载速度。
    `.trim();

    const response4 = await client.chat.completions.create({
      model: getAIModel(),
      messages: [
        {
          role: "system",
          content: "你是一个专业的面试分析专家。",
        },
        {
          role: "user",
          content: `请分析以下面试转录，给出沟通能力评分（0-10）和简短评价（JSON格式）：
          
${longTranscript}

请以JSON格式输出，包含communicationScore（0-10）和overallFeedback（2-3句话）字段。`,
        },
      ],
      response_format: { type: "json_object" },
      max_tokens: 300,
    });

    const content4 = response4.choices[0]?.message?.content;
    const parsed4 = JSON.parse(content4 || "{}");
    console.log(`✅ 成功: 沟通能力评分 ${parsed4.communicationScore || "N/A"}/10`);
    console.log(`📝 评价: ${parsed4.overallFeedback || "N/A"}`);
    console.log();
  } catch (error: any) {
    console.error(`❌ 失败: ${error.message}`);
    console.error(error);
    process.exit(1);
  }

  console.log("=".repeat(60));
  console.log("✅ 所有测试通过！DeepSeek API 工作正常");
  console.log("=".repeat(60));
  console.log();
  console.log("📌 下一步：可以开始替换项目中的 OpenAI 调用");
}

// 运行测试
testDeepSeekAPI().catch((error) => {
  console.error("测试过程中发生错误:", error);
  process.exit(1);
});
