
/*global atom require module*/

/* Copyright 2014-2016 John de Murga - Licensed under the GPLv2 */

module.exports = {
    config: {
        "fontFamily": {
            "title": "Font family",
            "type": "string",
            "default": "ocp-light",
            "enum": [
                "camingo",
                "consola",
                "inconsolata",
                "ocp-light",
                "ocp-regular",
                "pt",
                "roboto-light",
                "roboto-regular"
            ]
        }
    },

    // state parameter not needed
    activate: function() {
        "use strict";
        var path = require("path");
        var fs = require("fs");
        var profileHome = path.join( atom.packages.getPackageDirPaths()[ 0 ], "..");
        var configFile = path.join( profileHome, "config.cson");

        var readStream = fs.createReadStream( configFile );
        readStream.on("error", function( err ) { throw(err); });

        var writeStream = fs.createWriteStream( configFile + ".bak");
        readStream.on("error", function( err ) { throw(err); });

        readStream.pipe( writeStream );

        atom.workspace.onDidStopChangingActivePaneItem(function( item ) {
            if ( item !== undefined && item !== null ) {
                // Make sure it is sensible file that won't lock things up
                if ( item.getElement ) {
                    var box = item.getElement();
                    if ( box.getScrollWidth && box.getScrollHeight ) {
                        if ( box.getScrollWidth() < 3000 && box.getScrollHeight() < 60000 ) {
                            module.exports.applyFix();
                        }
                    }
                }
            }
        });

        atom.config.onDidChange("johns-work-arounds.fontFamily", function( newFontFamily ) {
            atom.config.set("editor.fontFamily", newFontFamily );
        });
    },

    deactivate: function() {
        "use strict";
    },

    applyFix: function() {
        "use strict";
        atom.workspace.decreaseFontSize();
        atom.workspace.increaseFontSize();
    }
};
