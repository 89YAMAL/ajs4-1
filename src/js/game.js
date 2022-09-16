export default function getHealth(data) {
  let result = '';
  if (data.health > 50) {
    result = 'healthy';
  } else if (data.health <= 50 && data.health >= 15) {
    result = 'wounded';
  } else if (data.health < 15) {
    result = 'critical';
  }
  return result;
}
