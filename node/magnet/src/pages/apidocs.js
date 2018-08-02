import path from 'path';
import express from 'express';

export const controller = app => {
  const apidocsPath = path.join(__dirname, '..', '..', '..', '..');

  app.use('/apidocs', express.static(path.join(apidocsPath, 'apidocs')));
};
