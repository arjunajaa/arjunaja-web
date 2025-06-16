import React from 'react';
import Image from 'next/image';

const About = () => {
  const technologies = [
    { name: 'HTML5', src: '/about/html5-original.png', url: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5' },
    { name: 'CSS3', src: '/about/css3-original.png', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', src: '/about/javascript-original.png', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'TypeScript', src: '/about/typescript.png', url: 'https://www.typescriptlang.org/' },
    { name: 'React', src: '/about/react-original.png', url: 'https://reactjs.org/' },
    { name: 'Next.js', src: '/about/nextjs-original-wordmark.png', url: 'https://nextjs.org/' },
    { name: 'Node.js', src: '/about/nodejs-plain.png', url: 'https://nodejs.org/' },
    { name: 'Express', src: '/about/express-original-wordmark.png', url: 'https://expressjs.com/' },
    { name: 'Python', src: '/about/python-original.png', url: 'https://www.python.org/' },
    { name: 'Django', src: '/about/django-plain-wordmark.png', url: 'https://www.djangoproject.com/' },
    { name: 'PHP', src: '/about/php-plain.png', url: 'https://www.php.net/' },
    { name: 'Laravel', src: '/about/laravel-plain.png', url: 'https://laravel.com/' },
    { name: 'CodeIgniter', src: '/about/codeigniter-plain-wordmark.png', url: 'https://codeigniter.com/' },
    { name: 'Java', src: '/about/java-original.png', url: 'https://www.java.com/' },
    { name: 'Spring', src: '/about/spring-original.png', url: 'https://spring.io/' },
    { name: 'Dart', src: '/about/dart-plain-wordmark.png', url: 'https://dart.dev/' },
    { name: 'Flutter', src: '/about/flutter-original.png', url: 'https://flutter.dev/' },
    { name: 'MySQL', src: '/about/mysql-plain.png', url: 'https://www.mysql.com/' },
    { name: 'PostgreSQL', src: '/about/postgresql-plain.png', url: 'https://www.postgresql.org/' },
    { name: 'Git', src: '/about/git-original.png', url: 'https://git-scm.com/' },
    { name: 'GitHub', src: '/about/github-original-wordmark.png', url: 'https://github.com/' },
    { name: 'GitLab', src: '/about/gitlab-original-wordmark.png', url: 'https://about.gitlab.com/' },
    { name: 'Docker', src: '/about/docker-plain-wordmark.png', url: 'https://www.docker.com/' },
    { name: 'Google Cloud', src: '/about/googlecloud-original.png', url: 'https://cloud.google.com/' },
    { name: 'Figma', src: '/about/figma-original.png', url: 'https://www.figma.com/' },
    { name: 'VS Code', src: '/about/vscode-original.png', url: 'https://code.visualstudio.com/' },
    { name: 'Linux', src: '/about/linux-original.png', url: 'https://www.linux.org/' },
    { name: 'NestJS', src: '/about/nestjs-plain.png', url: 'https://nestjs.com/' },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-start py-16 px-2 sm:px-4 md:px-8 lg:px-12">
      {/* Segitiga Siku-siku Hitam di Pojok Kanan Atas (Hidden on mobile/tablet) */}
      <div
        className="hidden xl:block absolute top-0 right-0 w-1/2 h-1/2 bg-black"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)' }}
      />
      <div className="w-full max-w-3xl">
        <p className="text-5xl sm:text-6xl font-bold text-black mb-2 leading-tight sm:leading-tight text-left font-inter-tight">
          Driven by curiosity, I have intentionally explored a multitude of modern tools and frameworks 
        </p>
        <p className="text-base sm:text-lg font-normal text-gray-700 mb-8 leading-snug sm:leading-snug text-left font-inter-tight">
          As a result of this hands-on exploration, I bring a versatile technical toolkit and a proven ability to quickly learn and effectively build, eager to apply my skills to solve real-world challenges.
        </p>
      </div>

      <div className="w-full max-w-5xl mt-0">
        <div className="grid grid-cols-12 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-14 gap-1 sm:gap-3 md:gap-4 place-items-center">
          {technologies.map((tech) => (
            <a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-0.5 sm:p-1 aspect-square group"
              title={tech.name}
            >
              <div className="relative w-7 h-10 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={tech.src}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
