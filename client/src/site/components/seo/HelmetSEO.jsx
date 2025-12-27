import { Helmet } from "react-helmet-async";

const HelmetSEO = ({
  title,
  description,
  path = "",
  type = "website",
  image = "https://abdulkarimceilinganddecor.com/og-image.jpg",
}) => {
  const siteName = "Abdulkarim Ceiling and Decor Abuja";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const url = `https://abdulkarimceilinganddecor.com${path}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_NG" />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default HelmetSEO;
