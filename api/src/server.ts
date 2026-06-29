import Fastify from 'fastify';

const app = Fastify();

app.get('/api/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

app.post('/api/v1/discover', async (request, reply) => {
  return reply.send({
    id: 'd85b72b3-421e-4cf7-9e6b-123456789abcdef',
    species: 'Quercus robur',
    scientificName: 'Quercus robur',
    commonName: 'English Oak',
    confidence: 0.98,
    domain: 'FLORA',
    message: "Backend connected! (Replace this with real AI integration)"
  });
});

app.listen({ port: 4000, host: '0.0.0.0' }, () => {
  console.log('✅ VEDA Backend Server running on http://localhost:4000');
});