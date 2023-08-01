import TechnologiesIcons from '../../atoms/TecnologiesIcons';

const TechnologiesList = () => {
  return (
    <>
      {TechnologiesIcons.map((technology, index) => (
        <div key={index}>
          {technology.image}
          <h2>{technology.name}</h2>
        </div>
      ))}
    </>
  );
};

export default TechnologiesList;