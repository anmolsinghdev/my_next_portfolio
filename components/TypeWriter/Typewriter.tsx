import TypewriterComponent from 'typewriter-effect';

export function Type() {
  return (
    <TypewriterComponent
      options={{
        strings: [
          'Web Developer',
          'Software Engineer',
          'MERN Stack Developer',
          'Open Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
