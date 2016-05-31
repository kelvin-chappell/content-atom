namespace * contentatom.media
namespace java com.gu.contentatom.thrift.atom.media
#@namespace scala com.gu.contentatom.thrift.atom.media

typedef i64 Version

enum Platform {
  YOUTUBE,
  FACEBOOK,
  DAILYMOTION,
  MAINSTREAM,
  URL
}

enum AssetType {
  AUDIO,
  VIDEO
}

struct Asset {
  1: required AssetType assetType
  2: required Version version
  3: required string id
  4: required Platform platform
}

struct MediaAtom {
  /* the unique ID will be stored in the `atom` data, and this should correspond to the pluto ID */
  2: required list<Asset> assets
  3: required Version activeVersion
  4: optional string plutoProjectId
}