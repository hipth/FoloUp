[![GitHub stars](https://img.shields.io/github/stars/FoloUp/FoloUp?style=social)](https://github.com/FoloUp/FoloUp/stargazers)
![License](https://img.shields.io/github/license/foloup/foloup)
[![Twitter Follow](https://img.shields.io/twitter/follow/SuveenE?style=social)](https://x.com/SuveenE)

**Language / 语言:** [English](#foloup---ai-powered-voice-interviewer-for-hiring-) | [中文](#foloup---ai驱动的语音面试招聘平台-)

---

# FoloUp - AI-powered voice interviewer for hiring 💼

FoloUp is an open source platform for companies to conduct AI powered hiring interviews with their candidates.

<img src="https://github.com/user-attachments/assets/fa92ade1-02ea-4332-b5ed-97056dea01c3" alt="FoloUp Logo" width="800">

<div style="display: flex; flex-direction: row; gap: 20px; margin: 20px 0;">
  <picture>
    <img src="https://github.com/user-attachments/assets/91adf737-6f62-4f48-ae68-58855bc38ccf" alt="Description 1" width="400" style="max-width: 100%;">
  </picture>
  <picture>
    <img src="https://github.com/user-attachments/assets/91bbe5d5-1eff-4158-80d9-d98c2a53f59b" alt="Description 2" width="400" style="max-width: 100%;">
  </picture>
</div>

## Key Features

- **🎯 Interview Creation:** Instantly generate tailored interview questions from any job description.
- **🔗 One-Click Sharing:** Generate and share unique interview links with candidates in seconds.
- **🎙️ AI Voice Interviews:** Let our AI conduct natural, conversational interviews that adapt to candidate responses.
- **📊 Smart Analysis:** Get detailed insights and scores for each interview response, powered by advanced AI.
- **📈 Comprehensive Dashboard:** Track all candidate performances and overall stats.

Here's a [loom](https://www.loom.com/share/762fd7d12001490bbfdcf3fac37ff173?sid=9a5b2a5a-64df-4c4c-a0e7-fc9765691f81) of me explaining the app.

## Initial Setup

1. Clone the project.

```bash
git clone https://github.com/FoloUp/FoloUp.git
```

2. Copy the existing environment template file

```bash
cp .env.example .env
```

## Clerk Setup ([Clerk](https://clerk.com/))

We use Clerk for authentication. Set up Clerk environment variables in the `.env` file. Free plan should be more than enough.

1. Navigate to [Clerk](https://dashboard.clerk.com/) and create an application following the [setup guide](https://clerk.com/docs/quickstarts/setup-clerk).

<img src="https://github.com/user-attachments/assets/faa72830-10b0-4dfd-8f07-792e7520b6a2" alt="Clerk Environment Variables" width="800">

2. Your `.env` (NOT `.env.local`) file should have the `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` variables populated with **no inverted commas**

3. Enable organizations in your Clerk application by navigating to the [Organization Settings](https://dashboard.clerk.com/last-active?path=organizations-settings&_gl=1*58xbvk*_gcl_au*MTEzODk3NzAyMy4xNzM4NjQzMzU3*_ga*MzUyMTk4NzIwLjE3Mzg2NDM0NzY.*_ga_1WMF5X234K*MTczODczNzkxOC4zLjEuMTczODczNzkyNi4wLjAuMA..) page.

<img src="https://github.com/user-attachments/assets/381cd138-439a-4b4f-ae87-50414fb1d64b" alt="Clerk Organization Settings" width="800">

4. Make sure you create an organization and invite your email to it.

## Database Setup ([Supabase](https://supabase.com/))

Supabase is used for storing the data. It's really simple to set up and the free plan should suffice.

1. Create a project (Note down your project's password)
2. Got to SQL Editor and copy the SQL code from `supabase_schema.sql`

<img src="https://github.com/user-attachments/assets/a31c14b8-45ca-417c-8927-aceb36fa5990" alt="Supabase SQL Editor" height="200">

3. Run the SQL code to confirm the tables are created.
4. Copy the supabase url and anon key from the project settings and paste it in the `.env` file in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Retell AI Setup ([Retell AI](https://retell.ai/))

We use Retell AI to manage all the voice calls. They manage storage of recordings and provide a simple SDK to integrate with. They provide free credits to start with and will have to pay as you go.

1. Create an API key from [Retell AI Dashboard](https://dashboard.retellai.com/apiKey) and add it to the `.env` file in `RETELL_API_KEY`

## Add OpenAI API Key

We use OpenAI to generate questions for interviews and analyze responses. This would not be that costly.

1. Go to [OpenAI](https://platform.openai.com/api-keys) and create an API key
2. Add the API key to the `.env` file in `OPENAI_API_KEY`

## Getting Started locally

First install the packages:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Self Hosting

We recommend using [Vercel](https://vercel.com/) to host the app.

## Contributing

If you'd like to contribute to FoloUp, feel free to fork the repository, make your changes, and submit a pull request. Contributions are welcomed and appreciated.

For a detailed guide on contributing, read the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## Show Your Support 🌟

If you find FoloUp helpful, please consider giving us a star on GitHub! It helps us reach more developers and continue improving the project.

## Products built on top of FoloUp 🚀

<div style="display: flex; flex-direction: row; gap: 40px; align-items: center;">
  <a href="https://talvin.ai/" target="_blank" style="text-align: center; text-decoration: none;">
    <img src="https://pbs.twimg.com/profile_images/1910041959508422656/OEnXp-kO_400x400.jpg" alt="Talvin AI Logo" height="100" style="border-radius: 20%;">
    <p>Talvin AI</p>
  </a>
  <a href="https://tryrapidscreen.com/" target="_blank" style="text-align: center; text-decoration: none;">
    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQGbqXmQPuIQ2Q/company-logo_200_200/B4EZaWsDTcHcAM-/0/1746284852800/tryhiregenius_logo?e=1764201600&v=beta&t=WCrVzO0pczI72ZRR-1mbblF7NdMhS-5XdeiAO6Q5-7w" alt="Rapidscreen Logo" height="100" style="border-radius: 20%;">
    <p>Rapidscreen</p>
  </a>
  <a href="https://techifysolutions.com/blog/interview-screening-with-ai/" target="_blank" style="text-align: center; text-decoration: none;">
  <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFMfuKEtkDeGA/company-logo_200_200/company-logo_200_200/0/1633590742751/techify_solutions_pvt_ltd_logo?e=1764201600&v=beta&t=A6S_wFET56L1j037GOnEUaitHZQD032ybOY0-Cm4l5Q" alt="Techify Logo" height="100" style="border-radius: 20%;">
  <p>Techify Solutions</p>
  </a>
</div>

## Contact

If you have any questions or feedback, please feel free to reach out to us at [suveen.te1[at]gmail.com](mailto:suveen.te1@gmail.com).

## License

The software code is licensed under the MIT License.

---

# FoloUp - AI驱动的语音面试招聘平台 💼

FoloUp 是一个开源平台，帮助企业通过 AI 驱动的语音面试来招聘候选人。

<img src="https://github.com/user-attachments/assets/fa92ade1-02ea-4332-b5ed-97056dea01c3" alt="FoloUp Logo" width="800">

<div style="display: flex; flex-direction: row; gap: 20px; margin: 20px 0;">
  <picture>
    <img src="https://github.com/user-attachments/assets/91adf737-6f62-4f48-ae68-58855bc38ccf" alt="Description 1" width="400" style="max-width: 100%;">
  </picture>
  <picture>
    <img src="https://github.com/user-attachments/assets/91bbe5d5-1eff-4158-80d9-d98c2a53f59b" alt="Description 2" width="400" style="max-width: 100%;">
  </picture>
</div>

## 核心功能

- **🎯 面试创建：** 从任何职位描述中即时生成定制化的面试问题。
- **🔗 一键分享：** 在几秒钟内生成并分享唯一的面试链接给候选人。
- **🎙️ AI 语音面试：** 让我们的 AI 进行自然、对话式的面试，根据候选人的回答自适应调整。
- **📊 智能分析：** 通过先进的 AI 技术，为每次面试回答提供详细的洞察和评分。
- **📈 综合仪表板：** 跟踪所有候选人的表现和整体统计数据。

这里有一个[视频](https://www.loom.com/share/762fd7d12001490bbfdcf3fac37ff173?sid=9a5b2a5a-64df-4c4c-a0e7-fc9765691f81)介绍这个应用。

## 初始设置

1. 克隆项目。

```bash
git clone https://github.com/FoloUp/FoloUp.git
```

2. 复制环境变量模板文件

```bash
cp .env.example .env
```

## Clerk 设置 ([Clerk](https://clerk.com/))

我们使用 Clerk 进行身份验证。在 `.env` 文件中设置 Clerk 环境变量。免费计划应该就足够了。

1. 访问 [Clerk](https://dashboard.clerk.com/) 并按照[设置指南](https://clerk.com/docs/quickstarts/setup-clerk)创建应用。

<img src="https://github.com/user-attachments/assets/faa72830-10b0-4dfd-8f07-792e7520b6a2" alt="Clerk Environment Variables" width="800">

2. 你的 `.env` 文件（不是 `.env.local`）应该包含 `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` 和 `CLERK_SECRET_KEY` 变量，**不要使用引号**。

3. 在 Clerk 应用中启用组织功能，导航到[组织设置](https://dashboard.clerk.com/last-active?path=organizations-settings&_gl=1*58xbvk*_gcl_au*MTEzODk3NzAyMy4xNzM4NjQzMzU3*_ga*MzUyMTk4NzIwLjE3Mzg2NDM0NzY.*_ga_1WMF5X234K*MTczODczNzkxOC4zLjEuMTczODczNzkyNi4wLjAuMA..)页面。

<img src="https://github.com/user-attachments/assets/381cd138-439a-4b4f-ae87-50414fb1d64b" alt="Clerk Organization Settings" width="800">

4. 确保创建一个组织并邀请你的邮箱加入。

## 数据库设置 ([Supabase](https://supabase.com/))

Supabase 用于存储数据。设置非常简单，免费计划应该就足够了。

1. 创建一个项目（记下项目的密码）
2. 进入 SQL 编辑器，从 `supabase_schema.sql` 复制 SQL 代码

<img src="https://github.com/user-attachments/assets/a31c14b8-45ca-417c-8927-aceb36fa5990" alt="Supabase SQL Editor" height="200">

3. 运行 SQL 代码以确认表已创建。
4. 从项目设置中复制 supabase url 和 anon key，并将其粘贴到 `.env` 文件中的 `NEXT_PUBLIC_SUPABASE_URL` 和 `NEXT_PUBLIC_SUPABASE_ANON_KEY`。

## Retell AI 设置 ([Retell AI](https://retell.ai/))

我们使用 Retell AI 来管理所有语音通话。他们管理录音存储并提供简单的 SDK 进行集成。他们提供免费额度开始使用，之后按使用量付费。

1. 从 [Retell AI 仪表板](https://dashboard.retellai.com/apiKey)创建 API 密钥，并将其添加到 `.env` 文件中的 `RETELL_API_KEY`。

## 添加 OpenAI API 密钥

我们使用 OpenAI 生成面试问题并分析回答。这不会太昂贵。

1. 访问 [OpenAI](https://platform.openai.com/api-keys) 并创建 API 密钥
2. 将 API 密钥添加到 `.env` 文件中的 `OPENAI_API_KEY`

**注意：** 你也可以使用 DeepSeek 替代 OpenAI。只需在 `.env` 文件中设置 `DEEPSEEK_API_KEY` 即可。如果同时设置了 `DEEPSEEK_API_KEY` 和 `OPENAI_API_KEY`，系统会优先使用 DeepSeek。

## 本地开始使用

首先安装依赖包：

```bash
yarn
# 或者使用 npm
npm install
```

运行开发服务器：

```bash
yarn dev
# 或者使用 npm
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 自托管

我们推荐使用 [Vercel](https://vercel.com/) 来托管应用。

## 贡献

如果你想要为 FoloUp 做出贡献，欢迎 fork 仓库，进行修改并提交 pull request。我们欢迎并感谢所有贡献。

有关贡献的详细指南，请阅读 [CONTRIBUTING.md](CONTRIBUTING.md) 文件。

## 支持我们 🌟

如果你觉得 FoloUp 有帮助，请在 GitHub 上给我们一个 star！这有助于我们触达更多开发者并持续改进项目。

## 基于 FoloUp 构建的产品 🚀

<div style="display: flex; flex-direction: row; gap: 40px; align-items: center;">
  <a href="https://talvin.ai/" target="_blank" style="text-align: center; text-decoration: none;">
    <img src="https://pbs.twimg.com/profile_images/1910041959508422656/OEnXp-kO_400x400.jpg" alt="Talvin AI Logo" height="100" style="border-radius: 20%;">
    <p>Talvin AI</p>
  </a>
  <a href="https://tryrapidscreen.com/" target="_blank" style="text-align: center; text-decoration: none;">
    <img src="https://media.licdn.com/dms/image/v2/D4E0BAQGbqXmQPuIQ2Q/company-logo_200_200/B4EZaWsDTcHcAM-/0/1746284852800/tryhiregenius_logo?e=1764201600&v=beta&t=WCrVzO0pczI72ZRR-1mbblF7NdMhS-5XdeiAO6Q5-7w" alt="Rapidscreen Logo" height="100" style="border-radius: 20%;">
    <p>Rapidscreen</p>
  </a>
  <a href="https://techifysolutions.com/blog/interview-screening-with-ai/" target="_blank" style="text-align: center; text-decoration: none;">
  <img src="https://media.licdn.com/dms/image/v2/C4E0BAQFMfuKEtkDeGA/company-logo_200_200/company-logo_200_200/0/1633590742751/techify_solutions_pvt_ltd_logo?e=1764201600&v=beta&t=A6S_wFET56L1j037GOnEUaitHZQD032ybOY0-Cm4l5Q" alt="Techify Logo" height="100" style="border-radius: 20%;">
  <p>Techify Solutions</p>
  </a>
</div>

## 联系方式

如果你有任何问题或反馈，请随时通过 [suveen.te1[at]gmail.com](mailto:suveen.te1@gmail.com) 联系我们。

## 许可证

软件代码采用 MIT 许可证授权。
