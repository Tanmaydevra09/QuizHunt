const express = require('express');
const client = require('prom-client');
const path = require('path');

const app = express();
const register = new client.Registry();

client.collectDefaultMetrics({ register });

const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests',
  labelNames: ['method', 'route', 'status_code'],
});

register.registerMetric(httpRequestDuration);

app.use((req, res, next) => {
  const end = httpRequestDuration.startTimer();
  res.on('finish', () => {
    end({ method: req.method, route: req.path, status_code: res.statusCode });
  });
  next();
});

// Serve frontend native files efficiently from the root directory mappings
app.use(express.static(__dirname));

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(80, () => {
  console.log('Metrics server running on port 80');
});
