const About = () => {
  return (
    <div className="min-h-screen py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground">
              Where it all began and why we do what we do
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                How It Started
              </h2>
              <p className="leading-relaxed">
                It began with just a few children from the neighborhood—children who didn't have access to quality education
                but had so much potential and curiosity. What started as informal tutoring sessions soon grew into something
                more meaningful: a place where children could not only learn academics but also discover their creativity,
                build their confidence, and experience the world beyond their immediate surroundings.
              </p>
              <p className="leading-relaxed">
                The woman behind this initiative is a passionate teacher who believes that education is more than textbooks
                and exams. It's about nurturing whole human beings—curious, kind, and capable. She opened her home and her
                heart to these children, creating a safe space where they could learn at their own pace and feel valued.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                What Makes Us Different
              </h2>
              <p className="leading-relaxed">
                This isn't an NGO or a formal institution. It's a deeply personal effort driven by love and commitment.
                There are no fancy classrooms or corporate donors—just one dedicated teacher, a handful of volunteers,
                and the support of kind-hearted people who believe in this work.
              </p>
              <p className="leading-relaxed">
                We focus on holistic development. Yes, we teach reading, writing, and math. But we also take children to
                the zoo, to gardens, and to museums. We do art projects, tell stories, and encourage them to ask questions
                and explore. We want them to grow not just academically but as confident, creative, and compassionate individuals.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                The Children We Serve
              </h2>
              <p className="leading-relaxed">
                Our students come from underprivileged families in nearby areas. Many of their parents work as domestic help,
                drivers, or daily wage laborers. These families want the best for their children but often lack the resources
                to provide quality education. That's where we step in—offering them a chance to learn, grow, and dream.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Our Approach
              </h2>
              <ul className="list-disc list-inside space-y-2 leading-relaxed">
                <li>Small group learning for personalized attention</li>
                <li>Balance between academics and creative activities</li>
                <li>Regular educational outings to broaden horizons</li>
                <li>Focus on building confidence and curiosity</li>
                <li>Creating a loving, supportive environment</li>
              </ul>
            </div>

            <div className="bg-muted p-8 rounded-lg space-y-4">
              <h2 className="font-serif text-2xl font-semibold text-foreground">
                Our Vision
              </h2>
              <p className="leading-relaxed">
                We dream of a day when every child—regardless of their background—has access to education that nurtures
                their mind, heart, and spirit. While we may be small in scale, we believe that even touching the lives of
                a few children can create ripples of positive change. These children will grow up to make their own mark
                on the world, and that's what keeps us going.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
