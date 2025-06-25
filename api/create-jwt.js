import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ error: 'JWT secret not configured' });
  }

  const token = jwt.sign({ user: 'example' }, secret, { expiresIn: '1h' });

  res.status(200).json({ token });
}

