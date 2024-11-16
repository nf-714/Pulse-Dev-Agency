import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "What is your product?",
      answer:
        "Our product is a powerful and easy-to-use platform that helps businesses of all sizes streamline their operations and increase efficiency.",
    },
    {
      question: "How much does it cost?",
      answer:
        "We offer a range of pricing plans to fit your business needs. Pricing starts at $9 per month for our basic plan, with discounts available for annual subscriptions and enterprise customers.",
    },
    {
      question: "How do I get started?",
      answer:
        "Getting started is easy! Simply sign up for a free trial on our website, and one of our sales representatives will be in touch to help you get set up.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Absolutely! We have a dedicated customer support team available 24/7 to assist you with any questions or issues you may have. You can reach us by phone, email, or through our online chat feature.",
    },
  ];

  return (
    <section className="w-screen py-12 md:py-24 lg:py-32 bg-gradient-to-br to-gray-900 from-gray-800">
      <div className="container  px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className=" text-muted-foreground md:text-xl">
              Get answers to your questions about our product or service.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium hover:bg-muted/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pt-2 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
