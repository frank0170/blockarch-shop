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
  title: 'BlockArch SHOP',
  description: 'Bun venit pe site-ul oficial BlockArch',
  keywords: 'panouri solare, fotovoltaice, invertoare',
};

export default Meta;
