import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section className="container">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Andrea Scarpello
      </h1>

      <p className="mb-4">
        {`I am a front-end developer with over 15 years of experience, specializing in creating dynamic user interfaces and immersive user experiences. I am proficient in JavaScript, Vue.js, Nuxt.js, React.js, and Next.js, always with a strong focus on accessibility.`}
      </p>
      <p className="mb-4">
        {`Throughout my career, I have had the opportunity to collaborate with major brands, predominantly in the food and beverage sector, such as Coca-Cola, Ferrero, TicTac, CBA, Seara, Banco Pine, TFSport, Perugina, Vodafone, Heinz, Air Wick, and Artsana, contributing to the development of digital solutions that stand out for their innovation and quality.`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
