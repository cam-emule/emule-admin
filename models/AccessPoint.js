var keystone = require('keystone');
var Types = keystone.Field.Types;

var AccessPoint = new keystone.List('AccessPoint', {
});

AccessPoint.add({
		name: { type: String, required: true },
		subdomain: { type: String },
		latitude:{type:Types.Number},
		longitude:{type:Types.Number},
		description: { type: Types.Textarea },
		imageurl: {type:Types.Url}
});

AccessPoint.track = true;
AccessPoint.defaultSort = '-createdAt';
AccessPoint.defaultColumns = 'name, subdomain, description, createdAt';
AccessPoint.register();
