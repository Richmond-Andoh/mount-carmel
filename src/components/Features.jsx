// src/components/Features.jsx
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: '📋',
      title: 'Corporis voluptates officia eiusmod',
      description: 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
    },
    {
      icon: '💎',
      title: 'Ullamco laboris ladore pan',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
    },
    {
      icon: '📦',
      title: 'Labore consequatur incidid dolore',
      description: 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 mt-10">
      {features.map((f, i) => (
        <FeatureCard key={i} {...f} />
      ))}
    </div>
  );
};

export default Features;