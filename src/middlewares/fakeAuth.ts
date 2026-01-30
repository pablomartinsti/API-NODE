import { Request, Response, NextFunction } from 'express';

export function fakeAuth(req: Request, res: Response, next: NextFunction) {
  req.user = {
    id: '13d202f6-243c-42d0-9b09-75bc9e9141de',
    role: 'CONTADOR'
  };

  next();
}
