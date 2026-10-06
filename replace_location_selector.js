const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/sections/LocationSelector.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add dict to Props
content = content.replace(
  /export function LocationSelector\(\{\s*onProvinceChange,/s,
  'export function LocationSelector({\n  dict,\n  onProvinceChange,'
);
content = content.replace(
  /interface LocationSelectorProps \{/,
  'interface LocationSelectorProps {\n  dict?: any;'
);

// Replace Province
content = content.replace(
  /Province<\/Label>/,
  '{dict?.common?.locationSelector?.province || "Province"}</Label>'
);
content = content.replace(
  /"Select province"/,
  'dict?.common?.locationSelector?.selectProvince || "Select province"'
);

// Replace District
content = content.replace(
  /District<\/Label>/,
  '{dict?.common?.locationSelector?.district || "District"}</Label>'
);
content = content.replace(
  /provinceId \? "Select district" : "Select province first"/,
  'provinceId ? (dict?.common?.locationSelector?.selectDistrict || "Select district") : (dict?.common?.locationSelector?.selectProvinceFirst || "Select province first")'
);

// Replace Local Level
content = content.replace(
  /Local Level<\/Label>/,
  '{dict?.common?.locationSelector?.localLevel || "Local Level"}</Label>'
);
content = content.replace(
  /districtId \? "Select local level" : "Select district first"/,
  'districtId ? (dict?.common?.locationSelector?.selectLocalLevel || "Select local level") : (dict?.common?.locationSelector?.selectDistrictFirst || "Select district first")'
);

// Replace Ward
content = content.replace(
  /Ward<\/Label>/,
  '{dict?.common?.locationSelector?.ward || "Ward"}</Label>'
);
content = content.replace(
  /municipalityId \? "Select ward" : "Select local level first"/,
  'municipalityId ? (dict?.common?.locationSelector?.selectWard || "Select ward") : (dict?.common?.locationSelector?.selectLocalLevelFirst || "Select local level first")'
);
content = content.replace(
  /Ward \{w\}/,
  '{dict?.common?.locationSelector?.wardPrefix || "Ward "}{w}'
);

fs.writeFileSync(filePath, content);
console.log('LocationSelector updated');
