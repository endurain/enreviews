
//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const { RichText } = wp.editor;

registerBlockType( 'cgb/block-en-reviews', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'en-reviews' ), // Block title.
	icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'widgets', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'en-reviews' ),
		__( 'wit-reviews' ),
		__( 'reviews' ),
	],

  // Enable or disable support for low-level features
  supports: {
    // Turn off ability to edit HTML of block content
    html: true,
  },

  // Set up data model for our review block
  attributes: {
    title: {
      type: 'string',
      selector: 'js-review-title',
    },
    review: {
      type: 'string',
      selector: 'js-review-content',
      multiline: 'p',
    },
    author: {
      type: 'string',
      selector: 'js-review-author',
    },
  },

  // The UI for the WordPress editor
  edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props;

    return (
      <div className={className}>
        <RichText
          className="js-review-title wp-admin-review-title"
          value={attributes.title}
          onChange={value => setAttributes({ title: value })}
          tagName="h3"
          placeholder="Review title"
        />
        <RichText
          className="js-review-content wp-admin-review-content"
          value={attributes.review}
          onChange={value => setAttributes({ review: value })}
          tagName="p"
          placeholder="Review content"
          multiline="p"
        />
        <RichText
          className="js-review-author wp-admin-review-author"
          value={attributes.author}
          onChange={value => setAttributes({ author: value })}
          tagName="p"
          placeholder="Review author"
        />
      </div>
    )
  },

  // We return null since we're using dymanic blocks
  save: props => {
    return null
  }

} );
