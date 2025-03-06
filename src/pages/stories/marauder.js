const marauder = {
  id: "marauder",
  title: "The New Marauder",
  category: "Fan Fiction",
  tags: ["Harry Potter", "Marauders"],
  bgColor: "bg-yellow-100",
  borderColor: "border-yellow-600",
  content: `
    <div class="p-8 ${"bg-yellow-100"}"> <!-- Match bgColor -->
      <!-- Title Section -->
      <h2 class="text-4xl font-bold mb-6 text-gray-900">The New Marauder</h2>
      
      <!-- Metadata Section -->
      <div class="flex items-center space-x-4 mb-8">
        <span class="text-sm font-medium text-gray-600">Category: Fan Fiction</span>
        <span class="text-sm font-medium text-gray-600">Tags: Harry Potter, Marauders</span>
      </div>

      <!-- Content Section -->
      <div class="prose prose-lg max-w-none text-gray-700">
        <p class="mb-6">
          Kings Cross Station was extremely busy on May 2nd 1998. Being the pathway to the afterlife everyone who died the day of the Battle of Hogwarts met there. Remus, Tonks, Fred, Colin and everyone else boarded a train together. Laughing, smiling. They knew what had happened but they were happy. Happy that they fought for what they believed in. That it was finally over.
        </p>
        <p class="mb-6">
          As they left the train, they were greeted by everyone who had passed away. Smiles grew on James and Sirius’ faces when they saw Remus. The three of them running towards each other. Collapsing in a hug. They were finally back together. Lily couldn’t help but laugh. Looking over at Fred, she felt the loneliness he had. He was all alone. Without his best friend. Lily moved closer to Fred, taking his hand in hers. They walked over to the boys still smiling and laughing with each others company. The three of them gave each other a mischievous look. Agreeing with each other, like they could read each others minds.
        </p>
        <p class="mb-6">
          “Hey Fred!” James called out. “We need a fourth man. What do you say?” Before he could answer, the boys grabbed him in a hug. The Marauders. Finally back together. With a little adjustment. They now had forever to be with each other. No one was warned on what havoc they would cause. It was their time once more. Mischief Managed !
        </p>
        <p class="mt-8 text-center text-sm text-gray-600 font-bold">
          – – – | AJM | – – –
        </p>
      </div>

      <!-- Button Section -->
      <div class="text-center mt-12">
        <a
          href="https://jacobeanforlife.wordpress.com/2015/12/28/the-new-marauder/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-yellow-600 rounded-lg shadow-md hover:bg-yellow-700 transition-all duration-300"
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

export default marauder;