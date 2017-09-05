( function() {
    dummyContent = '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';

    tinymce.PluginManager.add( 'dummytext_plugin', function( editor, url ) {

        // Add a button that opens a window
        editor.addButton( 'dummytext_button', {

            text: 'Lorem ipsum',
            icon: false,
            onclick: function() {
                // Open window
                editor.windowManager.open( {
                    title: 'Dummy Text Generator',
                    body: [{
                        type: 'textbox',
                        name: 'number',
                        label: 'Number of Paragraphs'
                    }],
                    onsubmit: function( e ) {
                        if(isNaN(e.data.number)) { alert('Please enter a valid number'); return;}

                        // Insert content when the window form is submitted
                        for (var i = 0; i < e.data.number; i++) {
                            editor.insertContent( dummyContent );
                        }
                    }
                } );
            }
        } );
    } );
} )();