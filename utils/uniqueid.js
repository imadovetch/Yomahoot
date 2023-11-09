function generateSmallUniqueId() {
	const timestamp = new Date().getTime();
	const randomString = Math.random().toString(36).substring(2, 8); // 6-character random string
  
	return `${timestamp}-${randomString}`;
  }
  
  function getUniqueId() {
	return generateSmallUniqueId();
  }
  
  export { getUniqueId };
  