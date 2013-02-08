#!/usr/bin/env node
var png_metadata = require('jsgui-node-png-metadata');
var jsgui = require('jsgui-lang-essentials');

var stringify = jsgui.stringify, tof = jsgui.tof;

var program = require('commander');

  program
  .version('0.3.8')
  //.option('-d, --source_dir [value]', 'Image source directory')
  //.option('-r, --rel_sprite_path [value]', 'relative sprite path')
  .option('-p, --image_path [value]', 'Input PNG path')
  .parse(process.argv);


//console.log(program.source_dir);
//console.log(program.css_path);


//console.log('Arguments length:', process.argv.length);
//console.log(process.argv);

// then get the image path.
//  it will be an argument by itself.

//process.argv

if (process.argv.length > 2) {
    // get the ones that don't have a - to start with (or don't have a space?)
    
    var cl_arhv = process.argv.slice(2);
    
    //console.log('tof(cl_arhv) ' + tof(cl_arhv));
    
    // then get the ones without a - to start with.
    
    var cl_args_no_dash = [];
    
    jsgui.each(cl_arhv, function(i, v) {
        if (v.indexOf('-') != 0) cl_args_no_dash.push(v);
    });
    
    //console.log('cl_args_no_dash.length ' + cl_args_no_dash.length);
    
    if (cl_args_no_dash.length == 1) {
        var image_path = cl_args_no_dash[0];
        
        
        png_metadata.from_file(image_path, function(err, res_metadata) {
            if (err) {
            
            } else {
                console.log('metadata: ' + stringify(res_metadata));
            }
        });

        
    } else {
        var images_paths = cl_args_no_dash;
        png_metadata.from_file(images_paths, function(err, res_metadata) {
            if (err) {
            
            } else {
                console.log('metadata: ' + stringify(res_metadata));
            }
        });
        
    }
    
    
    
}





