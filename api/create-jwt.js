import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ error: 'JWT secret not configured' });
  }

  const { user, role } = req.body;

  if (!user || !role) {
    return res.status(400).json({ error: 'user and role are required' });
  }

  const token = jwt.sign({ user, role }, secret, { expiresIn: '1h' });

  res.status(200).json({ token });
}

