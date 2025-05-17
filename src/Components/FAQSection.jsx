export default function FAQSection() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-5xl bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            "What technologies do you specialize in?",
            "Can you handle both small and large-scale projects?",
            "What services does your software house provide?",
            "How do I get started on a project?",
            "How can Codener help me with my Shopify store?",
            "What is your approach to project timelines and deadlines?",
            "Can you integrate the software solution with other existing systems or third-party APIs?",
            "Do you offer maintenance and support for software developed by other vendors?",
          ].map((question, index) => (
            <div
              key={index}
              className="border border-gray-200 p-4 rounded-xl text-gray-800 hover:bg-gray-100 transition"
            >
              {question}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
