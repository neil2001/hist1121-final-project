import { Gallery } from "react-grid-gallery";

const importAll = (context) => context.keys().map(context);

const getImageCount = (directory) => {
  // const regex = `\\.${type}$`;
  try {
    // Dynamically import all PNG files from the 'artifacts' directory
    if (directory === 'artifacts') {
      return importAll(require.context('../images/artifacts/', false, new RegExp(`\\.png$`))).length;
    }
    if (directory === 'ruins') {
      return importAll(require.context('../images/ruins/', false, new RegExp(`\\.jpeg$`))).length;
    }
  } catch (error) {
    console.error('Error loading images:', error);
    return 0;
  }
};

const imageStyle = {
    maxWidth: 'none',
    height: '250px',
    marginLeft: '0px',
    marginTop: '0px',
    borderRadius: '5px'
}

const viewportStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}

const CustomOverlay = (text) => {
    return (
      <div style={{ background: 'rgba(0, 0, 0, 0.7)', padding: '5px', borderRadius: '5px', color: 'white', textAlign: 'center', fontSize: 'smaller'}}>
        <p>{text}</p>
        {/* Add your content here */}
      </div>
    );
  };

const Artifacts = ({directory, name, type, descriptions}) => {
    // const directory = 'artifacts';
    const numImages = getImageCount(directory);

    // Generate the list of images
    const images = Array.from({ length: numImages }, (_, index) => ({
        src: require(`../images/${directory}/${name}${index + 1}.${type}`),
        customOverlay: CustomOverlay(descriptions[index]),
    }));

    return (<Gallery images={images} enableImageSelection={false} thumbnailStyle={imageStyle} rowHeight={250} margin={3}/>);
};

export default Artifacts;