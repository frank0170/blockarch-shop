import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Modvin',
  description: 'Bun venit pe site-ul oficial Modvin',
  keywords: 'panouri solare, fotovoltaice, invertoare',
};

export default Meta;
