const echo = {
  id: "echo",
  title: "Echo of Existence",
  category: "Life",
  tags: ["Motivation", "Inspiration"],
  bgColor: "bg-purple-100",
  borderColor: "border-purple-600",
  content: `
    <div class="p-8 ${"bg-purple-100"}"> <!-- Match bgColor -->
      <!-- Title Section -->
      <h2 class="text-4xl font-bold mb-6 text-gray-900">Echo of Existence</h2>
      
      <!-- Metadata Section -->
      <div class="flex items-center space-x-4 mb-8">
        <span class="text-sm font-medium text-gray-600">Category: Life</span>
        <span class="text-sm font-medium text-gray-600">Tags: Motivation, Inspiration</span>
      </div>

      <!-- Content Section -->
      <div class="prose prose-lg max-w-none text-gray-700">
        <p class="mb-6">
          The struggle and dilemma of staying true to yourself amidst the influences of this world can sometimes feel like walking on thin ice. But I feel that at the end of the day, we remain what we truly are. People will forget what you said, people will forget what you did, but people will never forget how you made them feel.
        </p>
        <p class="mb-6">
          When you’re a giver and you feel for your loved ones, you must know when to set a boundary. You cannot see anyone in pain, and you will push your limits to help them but make sure that you do not exhaust yourself in the process. One thing that you need to keep in mind is that you never expect anything back, so you’d always end up hurting yourself if you expect. You’re not burdened to always put others first. You’re a human and there can be times when you cannot be enough for someone and that’s fine. The things you do for them now may be little things, but one day, when you’re gone, they will look back and realize that those were the big things.
        </p>
        <p class="mb-6">
          Life has a way of revealing certain undeniable truths, doesn’t it? One of those truths is understanding how important you made others feel and how important you actually were in their lives. You might not feel the weight of this imbalance now, but it will catch up to you in the future. You see, it’s not always evident in the present moment, but when those you’ve grown attached to, when they leave, you’ll be faced with a harsh reality: that perhaps it didn’t truly matter as much as you thought it did—that perhaps, in the grand scheme of things, nothing truly really matters. It’s a sobering thought, isn’t it? One mistake, one misstep, and everything you’ve cherished could vanish into thin air, as though it never existed. It’s a humbling reminder of the fragility of human connections and the impermanence of our existence.
        </p>
        <p class="mt-8 text-center text-sm text-gray-600 font-bold">
          – – – | AJM | – – –
        </p>
      </div>

      <!-- Button Section -->
      <div class="text-center mt-12">
        <a
          href="https://jacobeanforlife.wordpress.com/2024/03/30/echo-of-existence/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          View on WordPress
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </div>
  `,
};

export default echo;