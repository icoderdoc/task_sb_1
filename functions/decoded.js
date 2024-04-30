const test = (key, value, translations) => {
  return value !== translations[value]
    ? (key = value)
    : (key = translations[value]);
};

export const decoded = (encoded, translations) => {
  const result = [];
  encoded.map((item) => {
    const obj = {};
    obj.groupId = test(this, item.groupId, translations);
    obj.areaId = test(this, item.areaId, translations);
    obj.departmentId = test(this, item.departmentId, translations);
    obj.directionId = test(this, item.directionId, translations);
    obj.mediaTypeId = test(this, item.mediaTypeId, translations);
    obj.mediaId = test(this, item.mediaId, translations);
    obj.resellingId = test(this, item.resellingId, translations);
    obj.serviceTypeId = test(this, item.serviceTypeId, translations);
    obj.formatTypeId = test(this, item.formatTypeId, translations);
    obj.formatId = test(this, item.formatId, translations);
    obj.unitId = test(this, item.unitId, translations);
    obj.platformId = test(this, item.platformId, translations);
    obj.budgetId = test(this, item.budgetId, translations);
    obj.adPlatformId = test(this, item.adPlatformId, translations);
    obj.service = test(this, item.service, translations);
    obj.formatSize = test(this, item.formatSize, translations);
    obj.ca = test(this, item.ca, translations);
    obj.mpmId = test(this, item.mpmId, translations);
    result.push(obj);
  });
  return result;
};
