import { Calendar, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPostContentProps {
  slug?: string;
}

const BlogPostContent = ({ slug }: BlogPostContentProps) => {
  if (slug === "apple-vs-anthropic-ai-reasoning") {
    return (
      <article className="prose prose-invert max-w-none">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-etherion-text text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>June 14, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>7 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>Etherion Team</span>
            </div>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            Apple vs. Anthropic: The AI Reasoning Debate Heats Up
          </h1>
          <div className="aspect-video bg-cover bg-center rounded-xl overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/f7da7f7e-fa42-4209-adea-ed584dd72b23.png" 
              alt="Apple vs Anthropic AI Debate"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-etherion-text text-lg leading-relaxed space-y-6">
          <p>
            In June 2025, a clash of perspectives in the AI world sparked heated discussion. Apple released a research paper titled <em>The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity</em>, challenging the capabilities of AI reasoning models. The paper argued that these models, touted by companies like OpenAI, Google, and Anthropic, struggle with complex logic puzzles, often wasting tokens and failing to deliver accurate answers. It suggested that the hype around reasoning models might be overstated, pointing to flawed benchmarks that focus too narrowly on coding and math tasks.
          </p>
          
          <p>
            Anthropic, a key player in AI safety and research, didn't let this go unanswered. In a bold response, they published a paper with their Claude Opus model listed as the first author—a subtle flex that didn't go unnoticed. Anthropic argued that Apple's experiments were poorly designed, citing issues like restrictive token limits that prevented models from fully articulating answers and the inclusion of unsolvable problems that skewed results. Their rebuttal emphasized that context, scale, and complexity are critical when evaluating AI reasoning, and Apple's tests didn't account for these factors properly.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Community Reactions</h2>
          <p>
            The tech community on platforms like X lit up with reactions. Some praised Anthropic's clapback, noting the audacity of listing Claude Opus as the lead author. Others questioned whether Apple's critique was redundant, as Anthropic's earlier work, like their Biology of an LLM paper, had already explored similar limitations in large language models. One X user remarked that Apple's paper seemed to ignore prior research, calling it a misstep in the ongoing AI discourse.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">The Deeper Tension</h2>
          <p>
            This exchange highlights a deeper tension in the AI race. Apple's skepticism reflects a cautious approach, possibly driven by their focus on integrating AI into resource-constrained devices like iPhones, where efficiency is paramount. Their partnership with Anthropic on a "vibe-coding" platform using Claude Sonnet in Xcode suggests they're not dismissing AI's potential but want it grounded in practical applications. Anthropic, on the other hand, defends the broader potential of reasoning models, advocating for better testing methodologies to showcase their strengths in real-world tasks like coding and analysis.
          </p>

          <p>
            The debate underscores a critical point: AI reasoning isn't a one-size-fits-all solution. While Apple warns against overhyping capabilities, Anthropic's response shows that the right conditions can unlock impressive results. As one X post put it, "Context, scale & complexity matter." This back-and-forth is a reminder that the path to powerful AI is as much about rigorous critique as it is about bold innovation.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">What's Next?</h2>
          <p>
            What's next? Expect more sparks as companies refine their models and testing methods. For now, Anthropic's response has kept them in the ring, but Apple's critique might push the industry to rethink how we measure AI's reasoning prowess.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Sources</h2>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li><a href="https://machinelearning.apple.com" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Apple's Paper: Apple Machine Learning Research</a></li>
            <li><a href="https://arxiv.org/abs/2506.09250" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Anthropic's Response Paper</a></li>
            <li><a href="https://www.thealgorithmicbridge.com" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">The Algorithmic Bridge Article</a></li>
            <li><a href="https://garymarcus.substack.com" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Gary Marcus Substack</a></li>
          </ul>
        </div>
      </article>
    );
  }

  if (slug === "meta-scale-ai-bet") {
    return (
      <article className="prose prose-invert max-w-none">
        <div className="mb-8">
          <div className="flex items-center gap-4 text-etherion-text text-sm mb-4">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>June 13, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>10 min read</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>Etherion Team</span>
            </div>
          </div>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
            Meta's $15 Billion Bet on Scale AI: A Game-Changer for AI Development or a Costly Gambit?
          </h1>
          <div className="aspect-video bg-cover bg-center rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
              alt="Meta Scale AI Deal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-etherion-text text-lg leading-relaxed space-y-6">
          <p>
            On June 13, 2025, Meta Platforms announced a monumental $14.8–$15 billion investment to acquire a 49% stake in Scale AI, a leading data-labeling startup critical to training advanced AI models. This deal, one of Meta's largest ever, signals an aggressive push to bolster its artificial intelligence capabilities and catch up with rivals like OpenAI, Google, and Anthropic. As part of the agreement, Scale AI's founder and CEO, Alexandr Wang, will join Meta to lead a new "Superintelligence Lab" aimed at pursuing artificial general intelligence (AGI). But what does this deal mean for Meta, Scale AI, and the broader AI ecosystem? Let's dive into the details, implications, and debates surrounding this blockbuster move.
          </p>
          
          <h2 className="text-white text-2xl font-bold mt-8 mb-4">The Deal: A Strategic Power Play</h2>
          <p>
            Meta's investment values Scale AI at over $29 billion, a significant leap from its $14 billion valuation in 2024. The deal, structured to avoid regulatory scrutiny, gives Meta a minority stake while integrating Scale's expertise and leadership into its AI strategy. Scale AI specializes in high-quality data labeling and evaluation, essential for training large language models (LLMs) like those powering ChatGPT or Meta's own Llama. Clients like Microsoft and OpenAI have relied on Scale's services, making it a linchpin in the AI supply chain.
          </p>
          <p>
            As part of the agreement, Alexandr Wang, Scale's 28-year-old CEO, will transition to Meta to head the Superintelligence Lab, bringing along key team members. Scale AI has promoted its Chief Strategy Officer, Jason Droege, to CEO to maintain continuity. The deal also includes a dividend structure, allowing Scale's investors—such as Accel, Index Ventures, Founders Fund, and Greenoaks—to cash out while retaining upside potential.
          </p>
          
          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Why Meta Made the Move</h2>
          <p>
            Meta's CEO, Mark Zuckerberg, has made AI a top priority, with plans to spend up to $65 billion on AI-related projects in 2025 alone. Despite heavy investments in compute infrastructure and open-source models like Llama, Meta has struggled to match the pace of competitors. Posts on X and industry analyses suggest Zuckerberg's frustration with Meta's AI progress drove this deal, aiming to leverage Scale's data expertise to improve model performance.
          </p>
          <p>
            Scale AI's value lies in its ability to provide clean, structured data and evaluation loops that enhance AI model accuracy. With generative AI booming—Scale's revenue jumped from $870 million in 2024 to a projected $2 billion in 2025—Meta sees this as a chance to secure a critical piece of the AI puzzle. By bringing Wang and his team in-house, Meta gains not just data but top-tier talent to accelerate its pursuit of "superintelligence," a term implying AI that surpasses human cognitive abilities.
          </p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Implications for the AI Ecosystem</h2>
          <p>This deal has far-reaching consequences:</p>
          <h3 className="text-white text-xl font-semibold mt-6 mb-3">Competitive Dynamics</h3>
          <p>Scale AI's role as a neutral data provider for companies like OpenAI and Google may be at risk. Meta's stake could deter competitors from continuing to work with Scale, potentially benefiting rivals like Turing or Surge AI. This shift could reshape the data-labeling market, as clients seek "neutral" partners.</p>
          <h3 className="text-white text-xl font-semibold mt-6 mb-3">Regulatory Scrutiny</h3>
          <p>The deal's structure as a minority investment mirrors strategies used by Microsoft (with OpenAI) and Amazon (with Anthropic) to avoid antitrust issues. The Federal Trade Commission, under past leadership, has been wary of such arrangements, but Meta's approach appears designed to sidestep similar challenges.</p>
          <h3 className="text-white text-xl font-semibold mt-6 mb-3">Gig Worker Concerns</h3>
          <p>Scale AI relies heavily on gig workers for data labeling, but these workers are unlikely to benefit from the deal's financial windfall. Critics argue this highlights inequities in the AI supply chain, where low-paid contractors fuel billion-dollar enterprises.</p>
          <h3 className="text-white text-xl font-semibold mt-6 mb-3">Meta's AI Ambitions</h3>
          <p>The creation of the Superintelligence Lab underscores Meta's shift toward ambitious, long-term AI goals. However, integrating Scale's resources and Wang's vision into Meta's sprawling organization poses challenges. Past big bets, like the $19 billion WhatsApp acquisition, paid off, but AI is a tougher battlefield.</p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Supporters vs. Skeptics</h2>
          <p>The deal has sparked polarized reactions. Supporters see it as a masterstroke: Meta gains access to Scale's data pipeline, talent, and Wang's leadership, potentially closing the gap with AI leaders. Posts on X highlight the strategic importance of controlling data, likening it to securing "airport routes" or "oil exploration rights" in the AI race.</p>
          <p>Skeptics, however, question the price tag and Meta's execution. Spending 10% of its 2024 revenue on a minority stake raises eyebrows, especially given Meta's mixed track record in AI. Some argue this is a desperate move to poach talent and data, akin to Microsoft's Inflection deal, which left the smaller company diminished. Others doubt Meta's ability to integrate Scale's capabilities effectively, citing its history of heavy spending with limited breakthroughs.</p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">What's Next?</h2>
          <p>The Meta-Scale AI deal is a high-stakes gamble in a fiercely competitive field. If successful, it could propel Meta into the AI elite, with Wang's leadership and Scale's data expertise driving breakthroughs. If it falters, it risks being a costly misstep, further highlighting Meta's challenges in keeping pace. The broader AI ecosystem will feel the ripples, from shifts in data provider dynamics to renewed debates about gig worker fairness and regulatory oversight.</p>
          <p>As Meta doubles down on its AI vision, the industry watches closely. Will this be Zuckerberg's WhatsApp moment, or a cautionary tale of overreach? Only time will tell.</p>

          <h2 className="text-white text-2xl font-bold mt-8 mb-4">Sources</h2>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><a href="https://www.reuters.com/technology/artificial-intelligence/meta-pay-nearly-15-billion-scale-ai-stake-information-2025-06-10/" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Reuters: "Meta to pay nearly $15 billion for Scale AI stake, The Information reports"</a></li>
              <li><a href="https://techcrunch.com/2025/06/13/can-scale-ai-and-alexandr-wang-reignite-metas-ai-efforts/" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">TechCrunch: "Scale AI confirms 'significant' investment from Meta, says Alexandr Wang will join to work on AI efforts"</a></li>
              <li><a href="https://www.nytimes.com/2025/06/13/technology/meta-scale-ai-investment.html" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">The New York Times: "Meta Invests $14.3 Billion in Scale AI to Kick-Start Artificial Intelligence Efforts"</a></li>
              <li><a href="https://time.com/6991465/meta-scale-ai-deal-gig-workers/" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">TIME: "Meta's $15 Billion Scale AI Deal Could Leave Gig Workers Behind"</a></li>
              <li><a href="https://www.theinformation.com/articles/meta-to-pay-nearly-15-billion-for-scale-ai-stake-and-founder-to-join-ai-efforts" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">The Information: "Meta to Pay Nearly $15 Billion for Scale AI Stake and Founder to Join AI Efforts"</a></li>
              <li><a href="https://www.axios.com/2025/06/11/meta-scale-ai-deal-zuckerberg" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Axios: "Mark Zuckerberg's supersized AI ambitions"</a></li>
              <li><a href="https://www.semafor.com/article/06/11/2025/metas-15-billion-investment-in-scale-ai-comes-with-a-catch" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Semafor: "Meta's $15 billion investment in Scale AI comes with a catch"</a></li>
              <li><a href="https://www.bloomberg.com/news/articles/2025-06-08/meta-in-talks-for-scale-ai-investment-that-could-top-10-billion" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Bloomberg: "Meta in Talks for Scale AI Investment That Could Top $10 Billion"</a></li>
              <li><a href="https://ca.finance.yahoo.com/news/meta-pay-nearly-15-billion" target="_blank" rel="noopener noreferrer" className="text-etherion-blue hover:underline">Yahoo Finance (Reuters): "Meta to pay nearly $15 billion for Scale AI stake, The Information reports"</a></li>
            </ul>
        </div>
      </article>
    );
  }

  return (
    <div className="text-center py-20">
      <h1 className="text-white text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-etherion-text mb-8">The blog post you're looking for doesn't exist.</p>
      <Link 
        to="/blog" 
        className="inline-flex items-center justify-center px-6 py-3 bg-etherion-blue text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
      >
        Back to Blog
      </Link>
    </div>
  );
};

export default BlogPostContent;
