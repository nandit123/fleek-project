const { SpaceClient } = require('@fleekhq/space-client');

// default port exposed by the daemon for client connection is 9998
const client = new SpaceClient({
  url: `http://0.0.0.0:9998`,
});

// client
//   .generateKeyPairWithForce()
//   .then(() => {
//     console.log('keys generated');
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// client
//   .createBucket({ slug: 'bucket5' })
//   .then((res) => {
//     const bucket = res.getBucket();

//     console.log(bucket.getKey());
//     console.log(bucket.getName());
//     console.log(bucket.getPath());
//     console.log(bucket.getCreatedat());
//     console.log(bucket.getUpdatedat());
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// client
//   .listBuckets()
//   .then((res) => {
//     const buckets = res.getBucketsList();

//     buckets.forEach((bucket) => {
//       console.log('key:', bucket.getKey());
//       console.log('name:', bucket.getName());
//       console.log('path:', bucket.getPath());
//       console.log('createdAt:', bucket.getCreatedat());
//       console.log('updatedAt:', bucket.getUpdatedat());
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const stream = client.addItems({
//   bucket: 'bucket5',
//   targetPath: '/', // path in the bucket to be saved
//   // sourcePaths: [ __dirname + '/source/fleek-daemon.PNG']
// });

// stream.on('data', (data) => {
//   console.log('data: ', data);
// });

// stream.on('error', (error) => {
//   console.error('error: ', error);
// });

// stream.on('end', () => {
//   console.log('end');
// });

// client
//   .listDirectory({ path: '/', bucket: 'googledrive' })
//   .then((res) => {
//     const entries = res.getEntriesList();

//     entries.forEach((entry) => {
//       console.log(entry.getPath());
//       console.log(entry.getName());
//       console.log(entry.getIsdir());
//       console.log(entry.getCreated());
//       console.log(entry.getUpdated());
//       console.log(entry.getIpfshash());
//       console.log(entry.getSizeinbytes());
//       console.log(entry.getFileextension());
//       console.log(entry.getIslocallyavailable());
//       console.log(entry.getBackupcount());
//       console.log(entry.getMembersList());
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// client
//   .listDirectories({ bucket: 'bucket12' })
//   .then((res) => {
//     const entries = res.getEntriesList();

//     entries.forEach((entry) => {
//       // console.log(entry.getPath());
//       console.log(entry.getName());
//       // console.log(entry.getIsdir());
//       // console.log(entry.getCreated());
//       // console.log(entry.getUpdated());
//       // console.log(entry.getIpfshash());
//       // console.log(entry.getSizeinbytes());
//       // console.log(entry.getFileextension());
//       // console.log(entry.getIslocallyavailable());
//       // console.log(entry.getBackupcount());
//       // console.log(entry.getMembersList());
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// client
// .createFolder({ path: '/subFolder', bucket: 'bucket5' })
// .then(() => {
//   console.log('folder created in path "/"');
// })
// .catch((err) => {
//   console.error(err);
// });

// const asyncFunc = async () => {
//   const bucket = 'personal';

//   const dirRes = await client.listDirectories({
//     bucket,
//   });

//   const entriesList = dirRes.getEntriesList();

//   const openFileRes = await client.openFile({
//     bucket,
//     path: entriesList[4].getPath(),
//   });

//   const location = openFileRes.getLocation();
//   console.log(location); // "/path/to/the/copied/file"
// };

// asyncFunc()

// client
// .deleteAccount()
// .then(() => {
//   console.log('account deleted');
// })
// .catch((err) => {
//   console.error(err);
// });
