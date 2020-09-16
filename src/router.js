import express from 'express';
const router = express.Router();

// Import all the controllers.
import {Page} from './controllers/_base.js';
import StartController from './controllers/start.js';
import InformationController from './controllers/information.js';
import GdprController from './controllers/gdpr.js';
import ConvictionController from './controllers/conviction.js';
import FirearmController from './controllers/firearm.js';
import amendOrRenewController from './controllers/amend-or-renew.js';

// Configure all of the pages and routes.

router.use(
  Page({
    path: 'start',
    positiveForward: 'information',
    controller: StartController
  })
);

router.use(
  Page({
    path: 'information',
    back: 'start',
    positiveForward: 'gdpr',
    controller: InformationController
  })
);

router.use(
  Page({
    path: 'gdpr',
    back: 'information',
    positiveForward: 'conviction',
    controller: GdprController
  })
);

router.use(
  Page({
    path: 'conviction',
    back: 'gdpr',
    negativeForward: 'conviction-stop',
    positiveForward: 'firearm',
    controller: ConvictionController
  })
);

router.use(
  Page({
    path: 'firearm',
    back: 'conviction',
    positiveForward: 'amend-or-renew',
    controller: FirearmController
  })
);

router.use(
  Page({
    path: 'amend-or-renew',
    back: 'firearm',
    controller: amendOrRenewController
  })
);

router.use(
  Page({
    path: 'conviction-stop',
    back: 'conviction'
  })
);

export {router as default};
