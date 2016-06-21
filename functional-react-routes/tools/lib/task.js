/**
 * MIT License (c) 2016-present Konstantin Tarkus <hello@tarkus.me>
 */

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function task(name, action) {
  const start = new Date();
  console.log(`[${format(start)}] Starting '${name}'...`);
  return Promise.resolve(action instanceof Function ? action() : action).then(() => {
    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(`[${format(end)}] Finished '${name}' after ${time}ms`);
  }, err => console.error(err.stack));
}

module.exports = task;
