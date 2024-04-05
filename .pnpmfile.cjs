function readPackage(pkg, context) {
  if (pkg.name === '@nestjsx/crud') {
    console.log('crud', pkg.dependencies);
    pkg.dependencies = {
      ...pkg.dependencies,
      '@nestjs/common': '9.0.5',
    };
  }

  return pkg;
}

module.exports = {
  hooks: {
    readPackage
  }
}
